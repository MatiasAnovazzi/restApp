package api.empleados.service;
import api.empleados.modelo.*;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class EmpleadoService {
    public static List<EmpleadoModelo> empleadoList = new ArrayList<>();
    public static List<EmpleadoModelo> getAll(){
        return empleadoList;
    }
    public static void add (EmpleadoModelo nuevoEmpleado){
        empleadoList.add(nuevoEmpleado);
    }
    
}
