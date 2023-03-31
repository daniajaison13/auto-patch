package com.team5.dashboard;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.ResponseEntity;

/**
 * @author DJ077459 It stores the access token(as accessToken), time in seconds
 *         for token expiration(as expiresIn) and the epoch time to
 *         expiry(expiryTime).
 **/
@Configuration
public class Token {

	String accessToken;
	long expiresIn;
	long expiryTime = 0;
	String content;

	public String getAccessToken() {
		return accessToken;
	}

	public void setAccessToken(String access_token) {
		this.accessToken = access_token;
	}

	public long getExpiresIn() {
		return expiresIn;
	}

	public void setExpiresIn(long expiresIn) {
		this.expiresIn = expiresIn;
	}

	public long getExpiryTime() {
		return expiryTime;
	}

	public void setExpiryTime(long expiryTime) {
		this.expiryTime = expiryTime;
	}
	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}


}
