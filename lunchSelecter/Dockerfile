FROM eclipse-temurin:11-jdk-alpine
VOLUME /tmp
ARG JAR_FILE
COPY ${JAR_FILE} app.jar
ENV JAVA_TOOL_OPTIONS="-Xms512m -Xmx512m"
ENTRYPOINT ["java","-jar","/app.jar"]