// package firstsample.demo.controller;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import firstsample.demo.Service.AdminAuthenticationService;
// // import firstsample.demo.Service.AuthenticationService;
// import firstsample.demo.dto.request.AdminAuthenticateRequest;
// import firstsample.demo.dto.request.AdminRegistrationRequest;
// import firstsample.demo.dto.response.AdminAuthenticateResponse;
// import lombok.RequiredArgsConstructor;
// @CrossOrigin
// @RestController
// @RequestMapping("/api/v1/auth")
// @RequiredArgsConstructor
// public class AdminAuthenticationController {

//     private final AdminAuthenticationService authenticationService;

//     @PostMapping("/register")
//     public ResponseEntity<AdminAuthenticateResponse> register(@RequestBody AdminRegistrationRequest request) {
//         return ResponseEntity.ok(authenticationService.register(request));
//     }

//     @PostMapping("/authenticate")
//     public ResponseEntity<AdminAuthenticateResponse> authenticate(@RequestBody AdminAuthenticateRequest request) {
//         return ResponseEntity.ok(authenticationService.authenticate(request));
//     }
// }

