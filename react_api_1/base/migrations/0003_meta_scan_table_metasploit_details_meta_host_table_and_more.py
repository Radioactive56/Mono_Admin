# Generated by Django 5.0.1 on 2024-06-08 06:48

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("base", "0002_nmap_core_dashboard"),
    ]

    operations = [
        migrations.CreateModel(
            name="Meta_Scan_Table",
            fields=[
                ("Scan_id", models.IntegerField(primary_key=True, serialize=False)),
                ("name", models.CharField(blank=True, max_length=200, null=True)),
                ("boundary", models.TextField(blank=True, null=True)),
                (
                    "description",
                    models.CharField(blank=True, max_length=200, null=True),
                ),
                ("owner_id", models.IntegerField(blank=True, null=True)),
                ("limit_to_network", models.BooleanField(blank=True, null=True)),
                ("created_at", models.DateTimeField(blank=True, null=True)),
                ("updated_at", models.DateTimeField(blank=True, null=True)),
                ("import_fingerprint", models.BooleanField(blank=True, null=True)),
                ("host_count", models.IntegerField(blank=True, null=True)),
            ],
            options={
                "ordering": ["Scan_id"],
            },
        ),
        migrations.CreateModel(
            name="Metasploit_details",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "Meta_on_off",
                    models.BooleanField(
                        default=True, help_text="Is the Metasploit up or not"
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Meta_Host_Table",
            fields=[
                ("Host_id", models.IntegerField(primary_key=True, serialize=False)),
                ("created_at", models.DateTimeField(blank=True, null=True)),
                ("address", models.GenericIPAddressField(blank=True, null=True)),
                ("mac", models.CharField(blank=True, max_length=200, null=True)),
                ("comm", models.CharField(blank=True, max_length=200, null=True)),
                ("name", models.CharField(blank=True, max_length=200, null=True)),
                ("state", models.CharField(blank=True, max_length=200, null=True)),
                ("os_name", models.CharField(blank=True, max_length=200, null=True)),
                ("os_flavor", models.CharField(blank=True, max_length=200, null=True)),
                ("os_sp", models.CharField(blank=True, max_length=200, null=True)),
                ("os_lang", models.CharField(blank=True, max_length=200, null=True)),
                ("arch", models.CharField(blank=True, max_length=200, null=True)),
                ("workspace_id", models.IntegerField(blank=True, null=True)),
                ("updated_at", models.DateTimeField(blank=True, null=True)),
                ("purpose", models.CharField(blank=True, max_length=200, null=True)),
                ("info", models.TextField(blank=True, null=True)),
                ("comments", models.CharField(blank=True, max_length=200, null=True)),
                ("scope", models.CharField(blank=True, max_length=200, null=True)),
                (
                    "virtual_host",
                    models.CharField(blank=True, max_length=200, null=True),
                ),
                ("note_count", models.IntegerField(blank=True, null=True)),
                ("vuln_count", models.IntegerField(blank=True, null=True)),
                ("service_count", models.IntegerField(blank=True, null=True)),
                ("host_detail_count", models.IntegerField(blank=True, null=True)),
                ("exploit_attempt_count", models.IntegerField(blank=True, null=True)),
                ("cred_count", models.IntegerField(blank=True, null=True)),
                (
                    "history_count",
                    models.CharField(blank=True, max_length=200, null=True),
                ),
                (
                    "detected_arch",
                    models.CharField(blank=True, max_length=200, null=True),
                ),
                ("os_family", models.CharField(blank=True, max_length=200, null=True)),
                ("total_services_scanned", models.IntegerField(default=0)),
                (
                    "services_scanned",
                    models.TextField(
                        blank=True,
                        null=True,
                        verbose_name="Service Id of reports that are generated",
                    ),
                ),
                ("total_vuln_scanned", models.IntegerField(default=0)),
                (
                    "vuln_scanned",
                    models.TextField(
                        blank=True,
                        null=True,
                        verbose_name="Vulnerability Id of reports that are generated",
                    ),
                ),
                (
                    "scan_id",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="base.meta_scan_table",
                    ),
                ),
            ],
            options={
                "ordering": ["-Host_id"],
            },
        ),
        migrations.CreateModel(
            name="Meta_Service_Table",
            fields=[
                ("Service_id", models.IntegerField(primary_key=True, serialize=False)),
                ("port", models.IntegerField(blank=True, null=True)),
                ("proto", models.CharField(blank=True, max_length=200, null=True)),
                ("state", models.CharField(blank=True, max_length=200, null=True)),
                ("name", models.CharField(blank=True, max_length=200, null=True)),
                ("info", models.TextField(blank=True, null=True)),
                ("created_at", models.DateTimeField(blank=True, null=True)),
                ("updated_at", models.DateTimeField(blank=True, null=True)),
                (
                    "host_id",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="base.meta_host_table",
                    ),
                ),
            ],
            options={
                "ordering": ["-Service_id"],
            },
        ),
        migrations.CreateModel(
            name="Meta_Vulnerability_Table",
            fields=[
                (
                    "Vulnerability_id",
                    models.IntegerField(primary_key=True, serialize=False),
                ),
                ("name", models.CharField(blank=True, max_length=200, null=True)),
                ("info", models.TextField(blank=True, null=True)),
                (
                    "exploited_at",
                    models.CharField(blank=True, max_length=200, null=True),
                ),
                ("vuln_detail_count", models.IntegerField(blank=True, null=True)),
                ("vuln_attempt_count", models.IntegerField(blank=True, null=True)),
                ("origin_id", models.IntegerField(blank=True, null=True)),
                (
                    "origin_type",
                    models.CharField(blank=True, max_length=200, null=True),
                ),
                (
                    "nexpose_data_vuln_def_id",
                    models.IntegerField(blank=True, null=True),
                ),
                ("created_at", models.DateTimeField(blank=True, null=True)),
                ("updated_at", models.DateTimeField(blank=True, null=True)),
                (
                    "host_id",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="base.meta_host_table",
                    ),
                ),
                (
                    "service_id",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="base.meta_service_table",
                    ),
                ),
            ],
            options={
                "ordering": ["-Vulnerability_id"],
            },
        ),
    ]