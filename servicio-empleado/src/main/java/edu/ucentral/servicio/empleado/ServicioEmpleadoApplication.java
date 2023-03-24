package edu.ucentral.servicio.empleado;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
@EntityScan({"edu.ucentral.common.empleado.model","edu.ucentral.common.empresa.model"})
public class ServicioEmpleadoApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServicioEmpleadoApplication.class, args);
	}

}
