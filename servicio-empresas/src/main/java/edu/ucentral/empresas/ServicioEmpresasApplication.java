package edu.ucentral.empresas;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;


@SpringBootApplication
@EnableEurekaClient
@EntityScan({"edu.ucentral.common.empresa.model"})
public class ServicioEmpresasApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServicioEmpresasApplication.class, args);
	}

}
