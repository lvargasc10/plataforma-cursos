 package edu.ucentral.common.empleado.model;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.UniqueElements;
import javax.persistence.Column;
import com.fasterxml.jackson.annotation.JsonFormat;


import edu.ucentral.common.empleado.model.Empleado;
import edu.ucentral.common.empresa.model.Empresa;

import java.util.Date;

@Entity
@Table(name="empleados")
public class Empleado implements Serializable {
	
	@Id
	@GeneratedValue(strategy = 	GenerationType.IDENTITY)
	private Long id;	
	@Column(unique=true)
	private String identificacion;
	@Column(name="nombre_empleado")
	private String nombreEmpleado;
	@Column(name="fecha_nacimiento")
	@JsonFormat(pattern="yyyy-MM-dd")
	private Date fechaNacimiento;	
	private String correo;
	private String telefono;
	@ManyToOne
	@JoinColumn(name="empresa_id")	
    private Empresa1 empresa;
	
	public Empresa1 getEmpresa() {
		return empresa;
	}

	public void setEmpresa(Empresa1 empresa) {
		this.empresa = empresa;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getIdentificacion() {
		return identificacion;
	}

	public void setIdentificacion(String identificacion) {
		this.identificacion = identificacion;
	}

	public String getNombreEmpleado() {
		return nombreEmpleado;
	}

	public void setNombreEmpleado(String nombreEmpleado) {
		this.nombreEmpleado = nombreEmpleado;
	}

	public Date getFechaNacimiento() {
		return fechaNacimiento;
	}

	public void setFechaNacimiento(Date fechaNacimiento) {
		this.fechaNacimiento = fechaNacimiento;
	}

	public String getCorreo() {
		return correo;
	}

	public void setCorreo(String correo) {
		this.correo = correo;
	}

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	/**
	 * Identificación del atributo.
	 */
	private static final long serialVersionUID = 1L;	

}
