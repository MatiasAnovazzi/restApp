package api.empleados.controllers;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;

@Path("/")
public class leerHtml {
    @GET
    public String hola() throws FileNotFoundException {
        File archivoHTML = new File("C:\\Users\\anova\\OneDrive\\Escritorio\\restApp (1)\\Cliente\\index.html");
        Scanner sc = new Scanner(archivoHTML);
        String archivo = "";
        while (sc.hasNextLine()) {
            String linea = sc.nextLine();
            archivo += linea;
        }
        sc.close();
        
        System.out.println("El archivo index.html se cargo correctamente");

        return archivo;

    }
}
