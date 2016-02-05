package com.cinderpup.twitteractions.configuration.hystrix;

import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;
import org.springframework.stereotype.Component;

@Component
public class HystrixTestService {

    @HystrixCommand(fallbackMethod = "getRealValue")
    public String getValueWeCouldntFetch() {
        throw new RuntimeException("service was down");
    }

    public String getRealValue() {
        return "hello world";
    }

}
