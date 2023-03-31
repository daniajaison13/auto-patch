package com.team5.dashboard;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "oel_patch_history")
public class OELServerDetails {
    
	@Id
	@Column
	private String key;
	
	@Column
	private String host_name;
	
	@Column
	private String operating_system;
	
	@Column
	private String minor_version;
	
	@Column
	private Date last_patch_date;
	
	@Column 
	private String server_up_time;
	
	@Column
	private String comments;
	
	@Column
	private String patch_status;
	
	@Column
	private String last_patch_flag;
	
	public String getKey() {
		return key;
	}

	public void setKey(String key) {
		this.key = key;
	}

	public String getHost_name() {
		return host_name;
	}

	public void setHost_name(String host_name) {
		this.host_name = host_name;
	}

	public String getOperating_system() {
		return operating_system;
	}

	public void setOperating_system(String operating_system) {
		this.operating_system = operating_system;
	}

	public String getMinor_version() {
		return minor_version;
	}

	public void setMinor_version(String minor_version) {
		this.minor_version = minor_version;
	}

	public Date getLast_patch_date() {
		return last_patch_date;
	}

	public void setLast_patch_date(Date last_patch_date) {
		this.last_patch_date = last_patch_date;
	}

	public String getServer_up_time() {
		return server_up_time;
	}

	public void setServer_up_time(String server_up_time) {
		this.server_up_time = server_up_time;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	public String getPatch_status() {
		return patch_status;
	}

	public void setPatch_status(String patch_status) {
		this.patch_status = patch_status;
	}

	public String getLast_patch_flag() {
		return last_patch_flag;
	}

	public void setLast_patch_flag(String last_patch_flag) {
		this.last_patch_flag = last_patch_flag;
	}
	
	
	
	
	
}
