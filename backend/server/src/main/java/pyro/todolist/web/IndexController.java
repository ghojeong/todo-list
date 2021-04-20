package pyro.todolist.web;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class IndexController {
    @GetMapping
    public ResponseEntity<String> getRoot() {
        return  ResponseEntity.ok().body("pong");
    }

    @GetMapping("/ping")
    public ResponseEntity<String> ping() {
        return  ResponseEntity.ok().body("pong");
    }
}
