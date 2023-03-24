package edu.ucentral.servicio.grupo.controller;

import java.util.Optional;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import edu.ucentral.commons.service.controller.CommonController;
import edu.ucentral.servicio.grupo.model.Grupo;
import edu.ucentral.servicio.grupo.model.EmpleadosGrupo;
import edu.ucentral.servicio.grupo.service.GrupoService;

@RestController
@CrossOrigin({"http://localhost:4200"})
public class GrupoController extends CommonController<Grupo, GrupoService> {
	
	@PutMapping("/{id}")
	public ResponseEntity<?> modificar(@Valid @RequestBody Grupo grupo, BindingResult result, @PathVariable Long id){
		if(result.hasErrors()) {
			return this.validar(result);
		}
		Optional<Grupo> optional = service.findById(id);
		if(!optional.isPresent()) {
			return ResponseEntity.notFound().build();
		}
		
		Grupo grupoBD = optional.get();
		grupoBD.setCurso(grupoBD.getCurso());
		grupoBD.setGrupo(grupoBD.getGrupo());	
		grupoBD.setHora(grupoBD.getHora());
		grupoBD.setSalon(grupoBD.getSalon());
		return ResponseEntity.status(HttpStatus.CREATED).body(service.save(grupoBD));
	}

	@PutMapping("/agregar-empleado/{id}")
	public ResponseEntity<?> modificar(@Valid @RequestBody EmpleadosGrupo empleadosG, BindingResult result, @PathVariable Long id){
		if(result.hasErrors()) {
			return this.validar(result);
		}
		Optional<Grupo> optional = service.findById(id);
		if(!optional.isPresent()) {
			return ResponseEntity.notFound().build();
		}		
		Grupo grupoBD = optional.get();
		empleadosG.setEmpleado(empleadosG.getEmpleado());
		empleadosG.setFallas(empleadosG.getFallas());
		empleadosG.setNotaFinal(empleadosG.getNotaFinal());
		grupoBD.addEmpleados(empleadosG);
		return ResponseEntity.status(HttpStatus.CREATED).body(service.save(grupoBD));
	}
	
	
}
