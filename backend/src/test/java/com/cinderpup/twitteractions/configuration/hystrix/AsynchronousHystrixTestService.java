package com.cinderpup.twitteractions.configuration.hystrix;

import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;
import org.springframework.stereotype.Service;
import rx.Observable;

@Service
public class AsynchronousHystrixTestService {

    @HystrixCommand(fallbackMethod = "getRealValue")
    public Observable<String> getValueWeCouldntFetch() {
        return Observable.error(new RuntimeException("service was down"));
    }

    public Observable<String> getRealValue() {
        return Observable.just("hello world");
    }

}
