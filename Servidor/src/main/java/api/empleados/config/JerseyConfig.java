package api.empleados.config;

import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.stereotype.Component;


import jakarta.ws.rs.ApplicationPath;
@ApplicationPath("/api")
@Component

public class JerseyConfig extends ResourceConfig{
    public JerseyConfig(){
        this.packages("api.empleados.controllers");

    }
}