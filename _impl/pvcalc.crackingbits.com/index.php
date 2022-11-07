<?php
// PVGis doesn't allow other frontends to call their API
// This is our proxy for hackaference app
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization');
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');
$method = $_SERVER['REQUEST_METHOD'];

if ($method == "OPTIONS") {
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
    header("HTTP/1.1 200 OK");
    die();
}

echo file_get_contents("https://re.jrc.ec.europa.eu/api/v5_2/PVcalc?" . $_SERVER["QUERY_STRING"]);
