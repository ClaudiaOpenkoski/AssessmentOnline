package co.school.assessment.config;

import io.github.jhipster.config.JHipsterConstants;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
<<<<<<< HEAD
import org.springframework.cache.CacheManager;
=======
>>>>>>> ff9f744f1ab1888886ad4625cbfd4bb9430a8ddd
import org.springframework.cloud.config.java.AbstractCloudConfig;
import org.springframework.context.annotation.*;

import javax.sql.DataSource;

@Configuration
@Profile(JHipsterConstants.SPRING_PROFILE_CLOUD)
public class CloudDatabaseConfiguration extends AbstractCloudConfig {

    private final Logger log = LoggerFactory.getLogger(CloudDatabaseConfiguration.class);

    @Bean
<<<<<<< HEAD
    public DataSource dataSource(CacheManager cacheManager) {
=======
    public DataSource dataSource() {
>>>>>>> ff9f744f1ab1888886ad4625cbfd4bb9430a8ddd
        log.info("Configuring JDBC datasource from a cloud provider");
        return connectionFactory().dataSource();
    }
}
