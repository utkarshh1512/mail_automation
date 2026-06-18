CREATE TABLE users (id UUID PRIMARY KEY, created_at TIMESTAMPTZ NOT NULL, name TEXT NOT NULL, email TEXT NOT NULL UNIQUE, role TEXT NOT NULL);
CREATE TABLE gmail_accounts (id UUID PRIMARY KEY, created_at TIMESTAMPTZ NOT NULL, user_id UUID NOT NULL, gmail_email TEXT NOT NULL, access_token TEXT NOT NULL, last_synced_at TIMESTAMPTZ);
CREATE TABLE emails (id UUID PRIMARY KEY, created_at TIMESTAMPTZ NOT NULL, gmail_message_id TEXT UNIQUE, sender TEXT, subject TEXT, content TEXT, category TEXT, sentiment TEXT, intent TEXT, confidence_score DOUBLE PRECISION NOT NULL, status TEXT, vip_customer BOOLEAN NOT NULL DEFAULT FALSE, prior_angry_interactions INTEGER NOT NULL DEFAULT 0);
CREATE TABLE replies (id UUID PRIMARY KEY, created_at TIMESTAMPTZ NOT NULL, email_id UUID NOT NULL, generated_reply TEXT NOT NULL, approved_by UUID, sent BOOLEAN NOT NULL DEFAULT FALSE);
CREATE TABLE escalations (id UUID PRIMARY KEY, created_at TIMESTAMPTZ NOT NULL, email_id UUID NOT NULL, reason TEXT NOT NULL, assigned_to UUID, status TEXT NOT NULL);
CREATE TABLE knowledge_base (id UUID PRIMARY KEY, created_at TIMESTAMPTZ NOT NULL, title TEXT NOT NULL, category TEXT, vector_id TEXT NOT NULL, source_preview TEXT);
CREATE INDEX idx_emails_category ON emails(category); CREATE INDEX idx_emails_status ON emails(status); CREATE INDEX idx_escalations_status ON escalations(status);
