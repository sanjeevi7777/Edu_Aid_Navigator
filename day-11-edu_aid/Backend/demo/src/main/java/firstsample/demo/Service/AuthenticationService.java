
package firstsample.demo.Service;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import firstsample.demo.Model.Role;
import firstsample.demo.Model.User;
import firstsample.demo.Repository.UserRepository;
import firstsample.demo.dto.request.AuthenticationRequest;
import firstsample.demo.dto.request.RegisterRequest;
import firstsample.demo.dto.response.AuthenticationResponse;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    @SuppressWarnings("null")
    public AuthenticationResponse register(RegisterRequest request) {
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
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .id(id)
                .name(name)
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
            authenticationManager.authenticate(
                            new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
            var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
            var jwtToken = jwtService.generateToken(user);
            var name = user.getName();
            var id=user.getId();
            return AuthenticationResponse.builder()
                            .token(jwtToken)
                            .id(id)
                            .name(name)
                            .build();
    }
}
