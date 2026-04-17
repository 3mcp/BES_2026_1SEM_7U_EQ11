import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

def test_clicar_eventos():
    options = Options()
    options.binary_location = "/usr/bin/chromium-browser"
    options.add_argument("--no-sandbox")
    options.add_argument("--disable-dev-shm-usage")

    service = Service("/usr/bin/chromedriver")
    driver = webdriver.Chrome(service=service, options=options)
    driver.maximize_window()

    driver.get("http://localhost:3000")
    time.sleep(3)

    wait = WebDriverWait(driver, 10)
    btn_eventos = wait.until(
        EC.element_to_be_clickable((By.XPATH, "//button[normalize-space()='Eventos']"))
    )
    btn_eventos.click()
    time.sleep(3)

    # Verifica se o h1 mudou para Eventos
    titulo = wait.until(
        EC.presence_of_element_located((By.XPATH, "//h1[normalize-space()='Eventos']"))
    )
    assert "Eventos" in titulo.text

    time.sleep(2)
    driver.quit()