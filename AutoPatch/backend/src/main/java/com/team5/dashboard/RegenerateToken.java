package com.team5.dashboard;

import java.time.Instant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

/**
 * @author DJ077459 RegenerateToken class is used to check if the token has
 *         expired.
 * 
 */
@Configuration
public class RegenerateToken {
	@Autowired
	OAuthTokenRetriever httpclient;
	@Autowired
	Token tokenobj;
	@Value("${bufferTime}")
	private long bufferTime;// Buffer time; To generate the token 30 minutes before it actually expires.

	public void getToken() throws Exception {
		/*
		 * getToken method is used to retrieve the OauthToken. It will call the
		 * sendOAuthReq() method to generate new token if the old token has expired. If
		 * not the current access token will be returned.
		 */
		Instant instant = Instant.now();
		long currentTimeInSec = instant.getEpochSecond();
		if (currentTimeInSec >= tokenobj.expiryTime) {
			httpclient.sendOAuthReq();
			long expiryTimeOfToken = tokenobj.getExpiresIn();
			long expiryTime = currentTimeInSec + (expiryTimeOfToken - bufferTime);
			tokenobj.setExpiryTime(expiryTime);
		} else {
			long expiresIn = tokenobj.getExpiryTime() - currentTimeInSec;
			tokenobj.setExpiresIn(expiresIn);
		}

	}
}