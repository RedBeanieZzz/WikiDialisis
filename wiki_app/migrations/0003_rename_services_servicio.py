# Generated by Django 5.0.2 on 2024-02-26 18:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('wiki_app', '0002_alter_services_telefono'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Services',
            new_name='Servicio',
        ),
    ]
