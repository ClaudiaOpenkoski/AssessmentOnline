package co.school.assessment.web.rest.util;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;
/**
 * Utility class for HTTP headers creation.
 */
public final class HeaderUtil {

    private static final Logger log = LoggerFactory.getLogger(HeaderUtil.class);

<<<<<<< HEAD
    private static final String APPLICATION_NAME = "testFrontendApp";
=======
    private static final String APPLICATION_NAME = "schoolAssessmentApp";
>>>>>>> ff9f744f1ab1888886ad4625cbfd4bb9430a8ddd

    private HeaderUtil() {
    }

    public static HttpHeaders createAlert(String message, String param) {
        HttpHeaders headers = new HttpHeaders();
<<<<<<< HEAD
        headers.add("X-testFrontendApp-alert", message);
        headers.add("X-testFrontendApp-params", param);
=======
        headers.add("X-schoolAssessmentApp-alert", message);
        headers.add("X-schoolAssessmentApp-params", param);
>>>>>>> ff9f744f1ab1888886ad4625cbfd4bb9430a8ddd
        return headers;
    }

    public static HttpHeaders createEntityCreationAlert(String entityName, String param) {
        return createAlert(APPLICATION_NAME + "." + entityName + ".created", param);
    }

    public static HttpHeaders createEntityUpdateAlert(String entityName, String param) {
        return createAlert(APPLICATION_NAME + "." + entityName + ".updated", param);
    }

    public static HttpHeaders createEntityDeletionAlert(String entityName, String param) {
        return createAlert(APPLICATION_NAME + "." + entityName + ".deleted", param);
    }

    public static HttpHeaders createFailureAlert(String entityName, String errorKey, String defaultMessage) {
        log.error("Entity processing failed, {}", defaultMessage);
        HttpHeaders headers = new HttpHeaders();
<<<<<<< HEAD
        headers.add("X-testFrontendApp-error", "error." + errorKey);
        headers.add("X-testFrontendApp-params", entityName);
=======
        headers.add("X-schoolAssessmentApp-error", "error." + errorKey);
        headers.add("X-schoolAssessmentApp-params", entityName);
>>>>>>> ff9f744f1ab1888886ad4625cbfd4bb9430a8ddd
        return headers;
    }
}
