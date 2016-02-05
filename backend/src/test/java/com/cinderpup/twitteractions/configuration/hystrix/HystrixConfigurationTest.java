package com.cinderpup.twitteractions.configuration.hystrix;


import com.cinderpup.twitteractions.TwitterActions;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import static org.assertj.core.api.AssertionsForInterfaceTypes.assertThat;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(TwitterActions.class)
public class HystrixConfigurationTest {

    public static final String EXPECTED_VALUE = "hello world";

    @Autowired
    private SynchronousHystrixTestService synchronousHystrixTestService;
    @Autowired
    private AsynchronousHystrixTestService asynchronousHystrixTestService;

    @Test
    public void getValueForSynchronousCall() {
        assertThat(synchronousHystrixTestService.getValueWeCouldntFetch())
                .isEqualTo(EXPECTED_VALUE);
    }

    @Test
    public void getValueForAsynchronousCall() {
        assertThat(asynchronousHystrixTestService.getValueWeCouldntFetch().toBlocking().single())
                .isEqualTo(EXPECTED_VALUE);
    }


}