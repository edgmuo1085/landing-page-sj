<?php
// Incluir la biblioteca PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

// Configurar las credenciales del servidor SMTP
$smtp_host = 'smtp.hostinger.com';
$smtp_port = 587;
$smtp_user = 'pruebas@sjasociadossas.com';
$smtp_pass = '*****';

// Configurar los detalles del correo electrónico
$to_email = 'pruebas@sjasociadossas.com';
$to_name = 'SjAsociados Notificaciones';
$from_email = 'pruebas@sjasociadossas.com';
$from_name = 'Formulario de contactanos';
$subject = 'Correo enviado desde plataforma de SjAsociados';

// Crear una nueva instancia de PHPMailer
$mail = new PHPMailer(true);
$data = json_decode(file_get_contents('php://input'), true);
$nombre = $data['nombre'];
$cedula = $data['cedula'];
$telefono = $data['telefono'];
$correo = $data['correo'];
$texto = $data['texto'];
$html = file_get_contents('emailHtml.html');

$html = str_replace('{nombre_cliente}', $nombre, $html);
$html = str_replace('{cedula_cliente}', $cedula, $html);
$html = str_replace('{texto_correo}', $texto, $html);
$html = str_replace('{correo_cliente}', $correo, $html);
$html = str_replace('{celular_cliente}', $telefono, $html);

try {
    // Configurar el servidor SMTP
    $mail->SMTPDebug = 0;
    $mail->isSMTP();
    $mail->Host       = $smtp_host;
    $mail->SMTPAuth   = true;
    $mail->Username   = $smtp_user;
    $mail->Password   = $smtp_pass;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = $smtp_port;

    // Configurar los detalles del correo electrónico
    $mail->setFrom($from_email, $from_name);
    $mail->addAddress("$to_email", $to_name);
    $mail->Subject = $subject;
    $mail->msgHTML($html);
    $mail->AltBody  =  $html;

    // Enviar el correo electrónico
    $mail->send();
    echo 'El correo se ha enviado correctamente.';
} catch (Exception $e) {
    echo 'Ha habido un error al enviar el correo electrónico: ', $mail->ErrorInfo;
}

