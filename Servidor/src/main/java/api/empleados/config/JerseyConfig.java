package api.empleados.config;

import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.RequestContextFilter;

import api.empleados.service.CorsFilter;
import jakarta.ws.rs.ApplicationPath;
@ApplicationPath("/")
@Component

public class JerseyConfig extends ResourceConfig{
    public JerseyConfig(){
        register(RequestContextFilter.class);
        this.packages("api.empleados.controllers");  
        register(CorsFilter.class);
    }
}