package edu.ucentral.empresas.controller;

import java.util.Optional;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import edu.ucentral.common.empresa.model.Empresa;
import edu.ucentral.commons.service.controller.CommonController;
import edu.ucentral.empresas.service.EmpresaService;


@RestController
public class EmpresaController extends CommonController<Empresa,EmpresaService> {
	
	@PutMapping("/{id}")
	public ResponseEntity<?> modificar(@Valid @RequestBody Empresa empresa, BindingResult result, @PathVariable Long id){
		if(result.hasErrors()) {
			return this.validar(result);
		}
		Optional<Empresa> optional = service.findById(id);
		if(!optional.isPresent()) {
			return ResponseEntity.notFound().build();
		}
		
		Empresa empres = optional.get();
		empres.setIdentificacion(empres.getIdentificacion());				
		empres.setCorreo(empres.getCorreo());		
		empres.setTelefono(empres.getTelefono());
		return ResponseEntity.status(HttpStatus.CREATED).body(service.save(empres));
	}

	
}
