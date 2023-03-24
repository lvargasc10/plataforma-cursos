package edu.ucentral.servicio.cursos;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
@EntityScan({"edu.ucentral.common.curso.model"})
public class ServicioCursosApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServicioCursosApplication.class, args);
	}

}
