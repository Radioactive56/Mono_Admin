# Generated by Django 5.0.1 on 2024-07-08 08:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("base", "0005_alter_scan_host"),
    ]

    operations = [
        migrations.CreateModel(
            name="PT_Age",
            fields=[
                ("asset_ip", models.BigAutoField(primary_key=True, serialize=False)),
                ("asset_name", models.CharField(blank=True, max_length=30, null=True)),
                ("concatenate", models.CharField(blank=True, max_length=50, null=True)),
                ("site_name", models.CharField(blank=True, max_length=30, null=True)),
                ("status", models.CharField(blank=True, max_length=30, null=True)),
                ("remarks", models.CharField(blank=True, max_length=30, null=True)),
                ("managed_by", models.CharField(blank=True, max_length=30, null=True)),
                (
                    "project_name",
                    models.CharField(blank=True, max_length=30, null=True),
                ),
                (
                    "project_spoc",
                    models.CharField(blank=True, max_length=30, null=True),
                ),
                (
                    "relationship",
                    models.CharField(blank=True, max_length=30, null=True),
                ),
                (
                    "group_client",
                    models.CharField(blank=True, max_length=30, null=True),
                ),
                ("iou_name", models.CharField(blank=True, max_length=30, null=True)),
                ("bg_name", models.CharField(blank=True, max_length=30, null=True)),
                (
                    "asset_location",
                    models.CharField(blank=True, max_length=30, null=True),
                ),
                (
                    "asset_os_family",
                    models.CharField(blank=True, max_length=30, null=True),
                ),
                (
                    "asset_os_name",
                    models.CharField(blank=True, max_length=30, null=True),
                ),
                (
                    "asset_os_version",
                    models.CharField(blank=True, max_length=30, null=True),
                ),
                ("asset_risk_score", models.IntegerField(blank=True, null=True)),
                (
                    "service_name",
                    models.CharField(blank=True, max_length=30, null=True),
                ),
                (
                    "service_product",
                    models.CharField(blank=True, max_length=30, null=True),
                ),
                (
                    "service_protocol",
                    models.CharField(blank=True, max_length=30, null=True),
                ),
                ("vuln_title", models.CharField(blank=True, max_length=30, null=True)),
                (
                    "vuln_description",
                    models.CharField(blank=True, max_length=30, null=True),
                ),
                ("vuln_cvss", models.IntegerField(blank=True, null=True)),
                ("vuln_risk_score", models.IntegerField(blank=True, null=True)),
                ("vuln_tags", models.CharField(blank=True, max_length=30, null=True)),
            ],
        ),
        migrations.CreateModel(
            name="Users",
            fields=[
                (
                    "username",
                    models.CharField(max_length=50, primary_key=True, serialize=False),
                ),
                ("password", models.CharField(max_length=50)),
                ("staff_status", models.BooleanField()),
                ("active_status", models.BooleanField()),
                ("superuser_status", models.BooleanField()),
                ("privileges", models.CharField(max_length=256)),
            ],
        ),
    ]