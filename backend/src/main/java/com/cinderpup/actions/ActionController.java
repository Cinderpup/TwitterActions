package com.cinderpup.actions;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static com.google.common.collect.Lists.newArrayList;

/**
 * Created by kwpisman on 04/02/16.
 */
@RestController
public class ActionController {

    @RequestMapping(value = "/actions", method = RequestMethod.GET)
    public List<String> getActions() {
        return newArrayList(
                "Stream by hashtag",
                "Do something else"
        );
    }
}
