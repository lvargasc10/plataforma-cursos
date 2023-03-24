package edu.ucentral.servicio.empleado.service;

import java.util.List;

import org.springframework.stereotype.Service;

import edu.ucentral.common.empleado.model.Empleado;
import edu.ucentral.commons.service.service.CommonServiceImp;
import edu.ucentral.servicio.empleado.repository.EmpleadoRepository;

@Service
public class EmpleadoServiceImp extends CommonServiceImp<Empleado,EmpleadoRepository> implements EmpleadoService {
	
	@Override	
	public List<Empleado> buscarEmpleadoCedula(String identificacion){
		return repository.buscarEmpleadoCedula(identificacion);	
	}

}
