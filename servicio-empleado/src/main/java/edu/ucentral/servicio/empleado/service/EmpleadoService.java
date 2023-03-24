package edu.ucentral.servicio.empleado.service;


import java.util.List;

import edu.ucentral.common.empleado.model.Empleado;
import edu.ucentral.commons.service.service.CommonService;

public interface EmpleadoService extends CommonService<Empleado> {
	
	List<Empleado> buscarEmpleadoCedula(String identificacion);
	
}
