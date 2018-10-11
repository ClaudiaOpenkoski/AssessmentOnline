package co.school.assessment.cucumber.stepdefs;

import co.school.assessment.SchoolAssessmentApp;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = SchoolAssessmentApp.class)
public abstract class StepDefs {

    protected ResultActions actions;

}
