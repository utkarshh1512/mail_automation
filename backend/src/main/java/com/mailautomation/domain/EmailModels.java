package com.mailautomation.domain;
import jakarta.persistence.*;import java.time.Instant;import java.util.UUID;
public class EmailModels { public enum Category{LEGAL,PRODUCT_ISSUE,DELIVERY_ISSUE,RETURN_REFUND,BILLING,GENERAL_ENQUIRY,FEEDBACK,SPAM} public enum Sentiment{ANGRY,FRUSTRATED,SAD,NEUTRAL,HAPPY} public enum Status{NEW,DRAFT_READY,AUTO_REPLIED,ESCALATED,RESOLVED} public enum Role{ADMIN,MANAGER,AGENT}
@MappedSuperclass public static abstract class Base{ @Id @GeneratedValue(strategy=GenerationType.UUID) public UUID id; public Instant createdAt=Instant.now();}
@Entity @Table(name="users") public static class User extends Base{ public String name; public String email; @Enumerated(EnumType.STRING) public Role role;}
@Entity @Table(name="gmail_accounts") public static class GmailAccount extends Base{ public UUID userId; public String gmailEmail; public String accessToken; public Instant lastSyncedAt;}
@Entity @Table(name="emails") public static class Email extends Base{ public String gmailMessageId; public String sender; public String subject; @Column(columnDefinition="text") public String content; @Enumerated(EnumType.STRING) public Category category; @Enumerated(EnumType.STRING) public Sentiment sentiment; public String intent; public double confidenceScore; @Enumerated(EnumType.STRING) public Status status; public boolean vipCustomer; public int priorAngryInteractions;}
@Entity @Table(name="replies") public static class Reply extends Base{ public UUID emailId; @Column(columnDefinition="text") public String generatedReply; public UUID approvedBy; public boolean sent;}
@Entity @Table(name="escalations") public static class Escalation extends Base{ public UUID emailId; public String reason; public UUID assignedTo; public String status;}
@Entity @Table(name="knowledge_base") public static class KnowledgeBase extends Base{ public String title; public String category; public String vectorId; @Column(columnDefinition="text") public String sourcePreview;}}
