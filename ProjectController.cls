public with sharing class ProjectController {
    public ProjectController() {

    }
    @AuraEnabled(cacheable=true)
    public static List<Project_Details__c> getDetails(){
        return[
            SELECT
            Name,
            Start_Date__c
            FROM Project_Details__c
        ];
    }
}
