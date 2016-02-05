package com.cinderpup.twitteractions.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.AbstractWebSocketMessageBrokerConfigurer;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;

@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfiguration extends AbstractWebSocketMessageBrokerConfigurer {

    @Override
    public void configureMessageBroker(MessageBrokerRegistry registry) {
        registry.enableSimpleBroker("/topic/");
        registry.setApplicationDestinationPrefixes("/app");
    }

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/twitteractions")
                .setAllowedOrigins(
                        "http://localhost:8080",
                        "http://localhost",
                        "http://127.0.0.1",
                        "http://127.0.0.1:8080",
                        "http://localhost:8081",
                        "http://localhost",
                        "http://127.0.0.1",
                        "http://127.0.0.1:8081"
                )
                .withSockJS();
    }
}
