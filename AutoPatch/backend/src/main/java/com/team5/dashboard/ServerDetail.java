package com.team5.dashboard;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity(name = "patch_history")
@Table(name = "patch_history")
public class ServerDetail {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name ="key")
	private Integer key;

	@Column(name = "server_name")
	private String serverName;

	@Column(name = "patchdate")
	private Date patchDate;

	@Column(name = "machine_up_time")
	private Date machineUpTime;

	@Column(name = "reboot_status")
	private String rebootStatus;

	@Column(name = "last_patch_details")
	private String lastPatchDetails;

	public Integer getId() {
		return key;
	}

	public void setId(Integer id) {
		this.key = id;
	}

	public String getServer_name() {
		return serverName;
	}

	public void setServer_name(String server_name) {
		this.serverName = serverName;
	}

	public Date getPatchDate() {
		return patchDate;
	}

	public void setPatchDate(Date patchDate) {
		this.patchDate = patchDate;
	}

	public Date getMachineUpTime() {
		return machineUpTime;
	}

	public void setMachineUpTime(Date machineUpTime) {
		this.machineUpTime = machineUpTime;
	}

	public String getRebootStatus() {
		return rebootStatus;
	}

	public void setRebootStatus(String rebootStatus) {
		this.rebootStatus = rebootStatus;
	}

	public String getLastPatchDetails() {
		return lastPatchDetails;
	}

	public void setLastPatchDetails(String lastPatchDetails) {
		this.lastPatchDetails = lastPatchDetails;
	}

	@Override
	public String toString() {

		return "Server : " + key + "| " + "name = " + serverName + "|";

	}

}
