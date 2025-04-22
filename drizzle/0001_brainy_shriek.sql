CREATE SCHEMA "admin";
--> statement-breakpoint
CREATE SCHEMA "content";
--> statement-breakpoint
CREATE TYPE "content"."day" AS ENUM('u', 'm', 't', 'w', 'r', 'f', 's');--> statement-breakpoint
CREATE TABLE "admin"."session" (
	"token" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" text NOT NULL,
	"fresh" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "content"."event" (
	"title" text NOT NULL,
	"link" text NOT NULL,
	"date" date NOT NULL,
	"start" time NOT NULL,
	"end" time NOT NULL,
	"description" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "content"."instrument" (
	"title" text PRIMARY KEY NOT NULL,
	"description" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "content"."schedule" (
	"day" "content"."day" NOT NULL,
	"start" time(0) with time zone NOT NULL,
	"end" time(0) with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE "content"."section" (
	"id" serial PRIMARY KEY NOT NULL,
	"heading" text NOT NULL,
	"body" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "public"."admin" SET SCHEMA "admin";
--> statement-breakpoint
ALTER TABLE "admin"."admin" RENAME TO "user";--> statement-breakpoint
ALTER TABLE "admin"."session" ADD CONSTRAINT "session_email_user_email_fk" FOREIGN KEY ("email") REFERENCES "admin"."user"("email") ON DELETE no action ON UPDATE no action;