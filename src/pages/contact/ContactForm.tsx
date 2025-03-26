import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { TextField, Grid, Box, Typography, Link, Stack } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import theme from "../../../public/theme/theme";
import CustomButton from "../../components/CustomButton";

type FormData = {
  message: string;
  name: string;
  email: string;
  subject: string;
};

const ContactForm: React.FC = () => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async data => {
    const requestData = {
      access_key: "99e963cc-8628-41ac-9978-871a879f1530",
      ...data, 
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const result = await response.json(); 

      if (result.success) {
        alert("Message sent successfully!");
        reset(); 
      } else {
        alert("Error sending message, please try again.");
      }
    } catch (error) {
      alert("Something went wrong, please try again.");
      console.error(error); // طباعة الخطأ في وحدة التحكم
    }
  };

  const secondaryTheme = theme.palette.secondary.main;
  const secondaryLightTheme = theme.palette.secondary.light;

  return (
    <Box sx={{ maxWidth: "80%", margin: "100px auto" }}>
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="center"
      >
        {/* نموذج الاتصال */}
        <Grid
          item
          xs={12}
          md={8}
        >
          <Typography
            variant="h4"
            sx={{ mb: 3 }}
          >
            {t("contact.title")}
          </Typography>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <Grid
              container
              spacing={2}
            >
              <Grid
                item
                xs={12}
              >
                <TextField
                  fullWidth
                  multiline
                  rows={2}
                  label={t("contact.message")}
                  {...register("message", { required: t("contact.message") })}
                  error={!!errors.message}
                  helperText={errors.message?.message}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
              >
                <TextField
                  fullWidth
                  label={t("contact.name")}
                  {...register("name", { required: t("contact.name") })}
                  error={!!errors.name}
                  helperText={errors.name?.message}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
              >
                <TextField
                  fullWidth
                  type="email"
                  label={t("contact.email.required")}
                  {...register("email", {
                    required: t("contact.email.required"),
                    pattern: {
                      value:
                        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                      message: t("contact.email.invalid"),
                    },
                  })}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              </Grid>
              <Grid
                item
                xs={12}
              >
                <TextField
                  fullWidth
                  label={t("contact.subject")}
                  {...register("subject", { required: t("contact.subject") })}
                  error={!!errors.subject}
                  helperText={errors.subject?.message}
                />
              </Grid>
              <Grid
                item
                xs={12}
              >
                <CustomButton
                  text={t("contact.send")}
                  icon={null}
                  width={"100%"}
                />
              </Grid>
            </Grid>
          </form>
        </Grid>

        {/* معلومات الاتصال */}
        <Grid
          item
          xs={12}
          md={3}
        >
          <Stack
            direction={"row"}
            sx={{ mb: 3, gap: "20px" }}
          >
            <HomeOutlinedIcon
              sx={{ color: secondaryTheme, fontSize: "30px" }}
            />
            <Box>
              <Typography variant="h6">{t("contact.address.city")}</Typography>
              <Typography variant="body2">
                {t("contact.address.address")}
              </Typography>
            </Box>
          </Stack>
          <Stack
            direction={"row"}
            sx={{ mb: 3, gap: "20px" }}
          >
            <PhoneIphoneOutlinedIcon sx={{ color: secondaryTheme }} />
            <Box>
              <Typography variant="h6">
                <Link
                  href="https://wa.me/+31637718553"
                  sx={{
                    textDecoration: "none",
                    color: "inherit",
                    "&:hover": { color: secondaryLightTheme },
                  }}
                >
                  {t("contact.phone.number")}
                </Link>
              </Typography>
              <Typography variant="body2">
                {t("contact.phone.hours")}
              </Typography>
            </Box>
          </Stack>
          <Stack
            direction={"row"}
            sx={{ mb: 3, gap: "20px" }}
          >
            <EmailOutlinedIcon sx={{ color: secondaryTheme }} />
            <Box>
              <Typography variant="h6">
                <Link
                  href="mailto:skyline6710@gmail.com"
                  sx={{
                    textDecoration: "none",
                    color: "inherit",
                    "&:hover": { color: secondaryLightTheme },
                  }}
                >
                  {t("contact.email_contact.email")}
                </Link>
              </Typography>
              <Typography variant="body2">
                {t("contact.email_contact.note")}
              </Typography>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;
