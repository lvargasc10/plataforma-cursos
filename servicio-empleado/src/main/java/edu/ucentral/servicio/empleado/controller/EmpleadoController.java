package edu.ucentral.servicio.empleado.controller;


import java.util.Optional;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import edu.ucentral.common.empleado.model.Empleado;
import edu.ucentral.commons.service.controller.CommonController;
import edu.ucentral.servicio.empleado.service.EmpleadoService;

@RestController
@CrossOrigin({"http://localhost:4200"})
public class EmpleadoController extends CommonController<Empleado,EmpleadoService> {
	
	@PutMapping("/{id}")
	public ResponseEntity<?> modificar(@Valid @RequestBody Empleado empleado, BindingResult result, @PathVariable Long id){
		if(result.hasErrors()) {
			return this.validar(result);
		}
		Optional<Empleado> optional = service.findById(id);
		if(!optional.isPresent()) {
			return ResponseEntity.notFound().build();
		}
		
		Empleado emple = optional.get();		
		emple.setIdentificacion(empleado.getIdentificacion());
		emple.setNombreEmpleado(empleado.getNombreEmpleado());		
		emple.setCorreo(empleado.getCorreo());
		emple.setFechaNacimiento(empleado.getFechaNacimiento());
		emple.setTelefono(empleado.getTelefono());
		emple.setEmpresa(empleado.getEmpresa());
		return ResponseEntity.status(HttpStatus.CREATED).body(service.save(emple));
	}
	
	@GetMapping("/cedula/{identificacion}")
	public ResponseEntity<?> empleadoCedula(@PathVariable String identificacion) {
		return ResponseEntity.ok(service.buscarEmpleadoCedula(identificacion));
	}
	
}
