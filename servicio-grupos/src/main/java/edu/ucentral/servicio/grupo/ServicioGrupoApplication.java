package edu.ucentral.servicio.grupo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;


@SpringBootApplication
@EnableEurekaClient
@EntityScan({"edu.ucentral.common.empleado.model", "edu.ucentral.common.curso.model", "edu.ucentral.servicio.grupo.model", "edu.ucentral.servicio.empresa.model" })
public class ServicioGrupoApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServicioGrupoApplication.class, args);
	}

}
