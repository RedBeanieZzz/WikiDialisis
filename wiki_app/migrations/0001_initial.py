# Generated by Django 5.0.2 on 2024-02-26 18:25

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Pais',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name_pais', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Tipo_servicio',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('tipo_prestador', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Provincia',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name_provincia', models.CharField(max_length=50)),
                ('pais', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='wiki_app.pais')),
            ],
        ),
        migrations.CreateModel(
            name='Services',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('nombre_prestador', models.CharField(max_length=100)),
                ('ciudad', models.CharField(max_length=60)),
                ('direccion', models.CharField(max_length=50)),
                ('telefono', models.IntegerField(max_length=10)),
                ('mail', models.EmailField(max_length=254)),
                ('pagina_web', models.URLField(max_length=254)),
                ('referente', models.CharField(max_length=50)),
                ('provincia', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='wiki_app.provincia')),
                ('tipo_prestador', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='wiki_app.tipo_servicio')),
            ],
        ),
    ]
