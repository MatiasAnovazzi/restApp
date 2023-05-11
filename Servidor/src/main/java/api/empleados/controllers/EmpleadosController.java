package api.empleados.controllers;



import java.net.URI;
import java.util.List;

import org.springframework.stereotype.Component;

import api.empleados.modelo.EmpleadoModelo;
import api.empleados.service.EmpleadoService;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.Response;
@Component
@Path("/")
    public class EmpleadosController {


        public EmpleadosController (EmpleadoService empleadoService){
            EmpleadoService.add(new EmpleadoModelo("Matias", "Anovazzi", 17));
        }
        @GET
        @Path("/Empleados")
        @Produces("application/json")
        public List<EmpleadoModelo> listarTodos() {
            return EmpleadoService.getAll();
        }
        @POST
        @Path("/Empleados")
        @Produces("application/json")
        @Consumes("application/json")
        public Response añadirUsuario(EmpleadoModelo EmpleadoModelo){
            EmpleadoService.add(EmpleadoModelo);
            System.out.println("ALERTA: se añadio un empleado");

            return Response.created(URI.create("Empleados/" + EmpleadoModelo.getNombre())).build();
        }
    }
