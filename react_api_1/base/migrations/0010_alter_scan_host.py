# Generated by Django 5.0.7 on 2024-12-09 10:24

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0009_alter_users_privilege'),
    ]

    operations = [
        migrations.AlterField(
            model_name='scan',
            name='host',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='base.host'),
        ),
    ]
