package co.school.assessment.cucumber.stepdefs;

<<<<<<< HEAD
import co.school.assessment.TestFrontendApp;
=======
import co.school.assessment.SchoolAssessmentApp;
>>>>>>> ff9f744f1ab1888886ad4625cbfd4bb9430a8ddd

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
<<<<<<< HEAD
@ContextConfiguration(classes = TestFrontendApp.class)
=======
@ContextConfiguration(classes = SchoolAssessmentApp.class)
>>>>>>> ff9f744f1ab1888886ad4625cbfd4bb9430a8ddd
public abstract class StepDefs {

    protected ResultActions actions;

}
