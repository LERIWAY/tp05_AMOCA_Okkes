<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;
use Tuupola\Middleware\HttpBasicAuthentication;
use \Firebase\JWT\JWT;
require __DIR__ . '/../vendor/autoload.php';
 
const JWT_SECRET = "makey1234567";

$app = AppFactory::create();

$app->get('/api/hello/{name}', function (Request $request, Response $response, $args) {
    $array = [];
    $array ["nom"] = $args ['name'];
    $response->getBody()->write(json_encode ($array));
    return $response;
});

// APi d'authentification générant un JWT
$app->post('/api/login', function (Request $request, Response $response, $args) {   
    $err=false;
    $body = $request->getParsedBody();
    $login = $body ['login'] ?? "";
    $pass = $body ['pass'] ?? "";

    if (!preg_match("/[a-zA-Z0-9]{1,20}/",$login))   {
        $err = true;
    }
    if (!preg_match("/[a-zA-Z0-9]{1,20}/",$pass))  {
        $err=true;
    }

    if (!$err) {
            $response = createJwT ($response);
            $data = array('nom' => 'toto', 'prenom' => 'titi');
            $response->getBody()->write(json_encode($data));
     } else {          
            $response = $response->withStatus(401);
     }
    return $response;
});

// get user 
$app->get('/api/user', function (Request $request, Response $response, $args) {
    $array = [];
    $array ["nom"] = "AMOCA";
    $array ["prenom"] = "Okkes";
    $response = addHeaders($response);
    $response->getBody()->write(json_encode ($array));
    return $response;
});

function createJwT (Response $response) : Response {

    $issuedAt = time();
    $expirationTime = $issuedAt + 6000;
    $payload = array(
    'userid' => '1',
    'email' => 'okkes2001@hotmail.fr',
    'pseudo' => 'leriway',
    'iat' => $issuedAt,
    'exp' => $expirationTime
    );

    $token_jwt = JWT::encode($payload,JWT_SECRET, "HS256");
    $response = $response->withHeader("Authorization", "Bearer {$token_jwt}");
    return $response;
}

$options = [
    "attribute" => "token",
    "header" => "Authorization",
    "regexp" => "/Bearer\s+(.*)$/i",
    "secure" => false,
    "algorithm" => ["HS256"],
    "secret" => JWT_SECRET,
    "path" => ["/api"],
    "ignore" => ["/api/hello","/api/login","/api/createUser"],
    "error" => function ($response, $arguments) {
        $data = array('ERREUR' => 'Connexion', 'ERREUR' => 'JWT Non valide');
        $response = $response->withStatus(401);
        return $response->withHeader("Content-Type", "application/json")->getBody()->write(json_encode($data));
    }
];

$app->get('/api/product', function (Request $request, Response $response, $args) {
    $json = file_get_contents("./mock/catalogue.json");
    $response = addHeaders($response);
    $response->getBody()->write($json);
    return $response;
});

$app->add(new Tuupola\Middleware\JwtAuthentication($options));
$app->run ();