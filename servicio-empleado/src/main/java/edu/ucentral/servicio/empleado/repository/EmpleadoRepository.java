package edu.ucentral.servicio.empleado.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import edu.ucentral.common.empleado.model.Empleado;

public interface EmpleadoRepository extends JpaRepository<Empleado, Long> {
	
	@Query(value="SELECT * FROM empleados WHERE empleados.identificacion = :identificacion" , nativeQuery=true)
	List<Empleado> buscarEmpleadoCedula(@Param("identificacion") String identificacion);

}
