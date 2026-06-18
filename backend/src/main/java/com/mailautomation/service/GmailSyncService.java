package com.mailautomation.service;
import org.springframework.scheduling.annotation.Scheduled;import org.springframework.stereotype.Service;
@Service public class GmailSyncService { @Scheduled(fixedDelayString="${app.gmail.poll-interval-ms:60000}") public void pollConnectedInboxes(){ /* Gmail API sync seam: fetch unread messages, parse threads, label processed messages, and deduplicate by gmailMessageId. */ } }
