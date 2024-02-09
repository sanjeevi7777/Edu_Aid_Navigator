
package firstsample.demo.Service;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import firstsample.demo.Model.Role;
import firstsample.demo.Model.User;
import firstsample.demo.Repository.UserRepository;
import firstsample.demo.dto.request.AdminAuthenticateRequest;
import firstsample.demo.dto.request.AdminRegistrationRequest;
import firstsample.demo.dto.response.AdminAuthenticateResponse;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AdminAuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    @SuppressWarnings("null")
    public AdminAuthenticateResponse register(AdminRegistrationRequest request) {
        var user = User
                .builder()
                .name(request.getName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER)
                .build();
        userRepository.save(user);
          var name = user.getName();
            var id=user.getId();
        var jwtToken = jwtService.generateToken(user);
        System.out.println("Token : "+jwtToken);
        return AdminAuthenticateResponse.builder()
                .token(jwtToken)
                .id(id)
                .name(name)
                .build();
    }

    public AdminAuthenticateResponse authenticate(AdminAuthenticateRequest request) {
            authenticationManager.authenticate(
                            new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
            var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
            var jwtToken = jwtService.generateToken(user);
            var name = user.getName();
            var id=user.getId();
            return AdminAuthenticateResponse.builder()
                            .token(jwtToken)
                            .id(id)
                            .name(name)
                            .build();
    }
}
