package edu.ucentral.common.empleado.model;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import edu.ucentral.common.empleado.model.Empleado;
@Entity
@Table(name="empresas")
public class Empresa1 implements Serializable {
	
	@Id
	@GeneratedValue(strategy = 	GenerationType.IDENTITY)
	private Long id;
	private String identificacion;
	@Column(name="nombre_empresa")
	private String nombreEmpresa;
	private String direccion;
	@Column(name="razon_social")
	private String razonSocial;
	@Column(name="fecha_creacion")
	@JsonFormat(pattern="yyyy-MM-dd")
	private Date fechaCreacion;	
	private String correo;
	private String telefono;
	
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



	public String getNombreEmpresa() {
		return nombreEmpresa;
	}



	public void setNombreEmpresa(String nombreEmpresa) {
		this.nombreEmpresa = nombreEmpresa;
	}



	public String getDireccion() {
		return direccion;
	}



	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}



	public String getRazonSocial() {
		return razonSocial;
	}



	public void setRazonSocial(String razonSocial) {
		this.razonSocial = razonSocial;
	}



	public Date getFechaCreacion() {
		return fechaCreacion;
	}



	public void setFechaCreacion(Date fechaCreacion) {
		this.fechaCreacion = fechaCreacion;
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
