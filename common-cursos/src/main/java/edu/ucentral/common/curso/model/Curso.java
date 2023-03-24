package edu.ucentral.common.curso.model;


import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name="cursos")
public class Curso implements Serializable {
	
	@Id
	@GeneratedValue(strategy = 	GenerationType.IDENTITY)
	private Long id;
	
	private String identificacion;
	
	@Column(name="nombre_curso")
	private String nombreCurso;
	
	private String docente;
	
	@Column(name="lugar_asistencia")
	private String lugarAsistencia;
	
	@Column(name="fecha_inicio")
	@JsonFormat(pattern="yyyy-MM-dd")
	private Date fechaInicio;	
	
	@Column(name="fecha_finalizacion")
	@JsonFormat(pattern="yyyy-MM-dd")
	private Date fechaFinalizacion;
	
	private String informacion;
	private Double costo;
	private String descripcion;
	private String horario;
	
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
	public String getNombreCurso() {
		return nombreCurso;
	}
	public void setNombreCurso(String nombreCurso) {
		this.nombreCurso = nombreCurso;
	}
	public String getDocente() {
		return docente;
	}
	public void setDocente(String docente) {
		this.docente = docente;
	}
	public String getLugarAsistencia() {
		return lugarAsistencia;
	}
	public void setLugarAsistencia(String lugarAsistencia) {
		this.lugarAsistencia = lugarAsistencia;
	}
	public Date getFechaInicio() {
		return fechaInicio;
	}
	public void setFechaInicio(Date fechaInicio) {
		this.fechaInicio = fechaInicio;
	}
	public Date getFechaFinalizacion() {
		return fechaFinalizacion;
	}
	public void setFechaFinalizacion(Date fechaFinalizacion) {
		this.fechaFinalizacion = fechaFinalizacion;
	}
	public String getInformacion() {
		return informacion;
	}
	public void setInformacion(String informacion) {
		this.informacion = informacion;
	}
	public Double getCosto() {
		return costo;
	}
	public void setCosto(Double costo) {
		this.costo = costo;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	public String getHorario() {
		return horario;
	}
	public void setHorario(String horario) {
		this.horario = horario;
	}
	
	/**
	 * Identificación del atributo.
	 */
	private static final long serialVersionUID = 1L;	
	
}