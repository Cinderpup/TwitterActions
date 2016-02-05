package com.cinderpup.twitteractions.configuration.hosebird;

import com.google.common.collect.Lists;
import com.twitter.hbc.ClientBuilder;
import com.twitter.hbc.core.Client;
import com.twitter.hbc.core.Constants;
import com.twitter.hbc.core.HttpHosts;
import com.twitter.hbc.core.endpoint.StatusesFilterEndpoint;
import com.twitter.hbc.core.processor.StringDelimitedProcessor;
import com.twitter.hbc.httpclient.BasicClient;
import com.twitter.hbc.httpclient.auth.Authentication;
import com.twitter.hbc.httpclient.auth.OAuth1;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.condition.ConditionalOnClass;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.concurrent.BlockingQueue;
import java.util.concurrent.LinkedBlockingQueue;

@Configuration
@ConditionalOnProperty(prefix = "hosebird", name = "enabled")
@ConditionalOnClass(BasicClient.class)
public class HoseBirdClientConfiguration {

    @Value("${hosebird.oauth.consumerkey}")
    private String consumerKey;
    @Value("${hosebird.oauth.consumersecret}")
    private String consumerSecret;
    @Value("${hosebird.oauth.token}")
    private String token;
    @Value("${hosebird.oauth.secret}")
    private String secret;

    @Bean
    public Authentication provideAuthentication() {
        return new OAuth1(consumerKey, consumerSecret, token, secret);
    }

    @Bean
    public Client client(Authentication authentication,
                         BlockingQueue<String> messageQueue) {

        StatusesFilterEndpoint hosebirdEndpoint = new StatusesFilterEndpoint();
        hosebirdEndpoint.trackTerms(Lists.newArrayList("java"));
        return
                new ClientBuilder()
                        .name("Hosebird-Client-01")                              // optional: mainly for the logs
                        .hosts(new HttpHosts(Constants.STREAM_HOST))
                        .authentication(authentication)
                        .endpoint(hosebirdEndpoint)
                        .processor(new StringDelimitedProcessor(messageQueue))
                        .build();
    }

    @Bean
    public BlockingQueue<String> messageQueue() {
        return new LinkedBlockingQueue<>(100000);
    }


}
