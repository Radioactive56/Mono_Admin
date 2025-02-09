# Generated by Django 5.0.1 on 2024-06-18 10:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("base", "0003_meta_scan_table_metasploit_details_meta_host_table_and_more"),
    ]

    operations = [
        migrations.CreateModel(
            name="Host",
            fields=[
                (
                    "ip_address",
                    models.GenericIPAddressField(
                        primary_key=True, serialize=False, unique=True
                    ),
                ),
                (
                    "ip_type",
                    models.CharField(
                        choices=[
                            ("Private IP", "Private IP"),
                            ("Public IP", "Public IP"),
                        ],
                        max_length=30,
                    ),
                ),
                (
                    "ip_version",
                    models.CharField(
                        choices=[("IPv4", "IPv4"), ("IPv6", "IPv6")],
                        default="IPv4",
                        editable=False,
                        max_length=4,
                    ),
                ),
                ("add_time", models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name="Scan",
            fields=[
                (
                    "scan_id",
                    models.AutoField(primary_key=True, serialize=False, unique=True),
                ),
                ("host", models.IntegerField(blank=True, null=True)),
                (
                    "current_status",
                    models.CharField(
                        choices=[
                            ("-2", "Core Impact: Host Error"),
                            ("-1", "Scan Aborted"),
                            ("0", "Yet to be Scanned"),
                            ("1", "NMAP WIP"),
                            ("2", "Core Impact WIP"),
                            ("3", "Result upload pending"),
                            ("4", "Done"),
                            ("5", "Metasploit WIP"),
                            ("6", "Metasploit Done"),
                            ("1.1", "NMAP Done"),
                            ("2.1", "Core Impact Done"),
                        ],
                        default="0",
                        max_length=30,
                    ),
                ),
                ("scan_add_time", models.DateTimeField(auto_now_add=True)),
                (
                    "priority",
                    models.PositiveBigIntegerField(
                        choices=[(0, "Urgent"), (1, "High"), (2, "Normal"), (3, "Low")],
                        default=2,
                    ),
                ),
                ("pt_start_time", models.DateTimeField(blank=True, null=True)),
                ("pt_stop_time", models.DateTimeField(blank=True, null=True)),
                ("nmap_start_time", models.DateTimeField(blank=True, null=True)),
                ("nmap_stop_time", models.DateTimeField(blank=True, null=True)),
                (
                    "nmap_scan_pid",
                    models.CharField(blank=True, max_length=128, null=True),
                ),
                ("nmap_abort_count", models.PositiveBigIntegerField(default=0)),
                ("core_impact_start_time", models.DateTimeField(blank=True, null=True)),
                ("core_impact_stop_time", models.DateTimeField(blank=True, null=True)),
                (
                    "core_scan_id",
                    models.CharField(blank=True, max_length=128, null=True),
                ),
                ("core_abort_count", models.PositiveBigIntegerField(default=0)),
                ("scan_restart_count", models.PositiveBigIntegerField(default=0)),
                (
                    "nmap_report",
                    models.CharField(blank=True, max_length=128, null=True),
                ),
                (
                    "core_impact_report",
                    models.CharField(blank=True, max_length=128, null=True),
                ),
                ("ptid", models.CharField(blank=True, max_length=128, null=True)),
                ("nmap_push_time", models.DateTimeField(blank=True, null=True)),
                ("core_push_time", models.DateTimeField(blank=True, null=True)),
                ("meta_push_time", models.DateTimeField(blank=True, null=True)),
                ("meta_add_time", models.DateTimeField(blank=True, null=True)),
                (
                    "meta_report",
                    models.CharField(blank=True, max_length=256, null=True),
                ),
                (
                    "debug_info",
                    models.TextField(blank=True, max_length=1028, null=True),
                ),
                ("scan_complete", models.BooleanField(default=False)),
            ],
            options={
                "ordering": ["-scan_id"],
            },
        ),
    ]
